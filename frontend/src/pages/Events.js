import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData(); // events will be the data returned by the loaded in the App

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;

  return <EventsList events={events} />;
};

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    ); // this way we don't have to use JSON.parse inside the error component
  } else {
    return response;
  }
};
