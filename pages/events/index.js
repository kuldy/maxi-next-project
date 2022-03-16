import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../helpers/api-util";

function AllEventsPage(props) {
  // const events = getAllEvents();
  const { events } = props;
  const router = useRouter();
  const handleSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of greate events that helps you to grow"
        />
      </Head>

      <div className="flex-col min-h-screen justify-center items-center p-6">
        <EventsSearch onSearch={handleSearch} />
        <EventList items={events} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
