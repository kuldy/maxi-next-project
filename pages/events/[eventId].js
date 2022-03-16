import Head from "next/head";
import { useRouter } from "next/router";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import {
  getEventById,
  getAllEvents,
  getFeaturedEvents,
} from "../../helpers/api-util";

function EventDetailPage(props) {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);
  const { event } = props;
  if (!event)
    return (
      <>
        <ErrorAlert>
          <p>No Event Found</p>
        </ErrorAlert>
      </>
    );

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event: event,
      revalidate: 30,
    },
  };
};

export const getStaticPaths = async () => {
  // const events = await getAllEvents();
  // const paths = events.map((e) => ({ params: { eventId: e.id } }));

  const events = await getFeaturedEvents();
  const paths = events.map((e) => ({ params: { eventId: e.id } }));

  // const paths = [{ params: { eventId: "e1" } }];
  return {
    paths,
    fallback: true,
  };
};

export default EventDetailPage;
