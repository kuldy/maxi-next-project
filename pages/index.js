import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

export default function HomePage(props) {
  const { events } = props;
  return (
    <>
      <Head>
        <title>NextJs Events</title>
        <meta
          name="description"
          content="Find a lot of greate events that helps you to grow"
        />
      </Head>
      <div className="bg-gray-100 p-6">
        <div className="flex min-h-screen justify-center items-center">
          <EventList items={events} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const events = await getFeaturedEvents();
  return {
    props: {
      events,
      revalidated: 1800,
    },
  };
};
