import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import { getFilteredEvents } from "../../helpers/api-util";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/Button";
import Head from "next/head";

function FilteredEventsPage(props) {
  // const router = useRouter();

  // const filterData = router.query.slug;
  // console.log(filterData);

  // if (!filterData)
  //   return (
  //     <ErrorAlert>
  //       <p>...loading</p>
  //     </ErrorAlert>
  //   );

  // const filterYear = filterData[0];
  // const filterMonth = filterData[1];

  // const numYear = +filterYear;
  // const numMonth = +filterMonth;

  let pageHead = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All the events for ${props.date.numMonth}/${props.date.numYear}`}
      />
    </Head>
  );

  if (props.hasError)
    return (
      <>
        {pageHead}
        <ErrorAlert>
          <p>Invalid filter! Please adjust your search values!</p>
        </ErrorAlert>
        <div className="text-center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );

  if (!props.filteredEvents || props.filteredEvents.length === 0)
    return (
      <>
        {pageHead}
        <ErrorAlert>
          <p>No events Found for the choosen filter!</p>
        </ErrorAlert>
        <div className="text-center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );

  const date = new Date(props.date.numYear, props.date.numMonth - 1);

  return (
    <>
      {pageHead}
      <ResultsTitle date={date} />
      <EventList items={props.filteredEvents} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const filterData = context.params.slug;

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2000 ||
    numMonth < 1 ||
    numMonth > 12
  )
    return {
      props: {
        hasError: true,
      },
      // notFound: true,
      // redirect: {
      //   destination: "/events",
      // },
    };

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
      date: {
        numYear: numYear,
        numMonth: numMonth,
      },
    },
  };
};

export default FilteredEventsPage;
