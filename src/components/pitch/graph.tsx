"use server";

import Chart from "../chart";

type RawData = Record<string, string>;

export type Data = Record<string, string | number>;

async function getData(url: string): Promise<Data[]> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: RawData[] = await res.json();

  const keys = Object.keys(data[0]);
  return data.map((item) => {
    return {
      [keys[0]]: item[keys[0]],
      [keys[1]]: parseInt(item[keys[1]].replace(/,/g, ""), 10),
    };
  });
}

export default async function Graph() {
  // get data for monthly active users
  const urlMAU =
    "https://cal.metabaseapp.com/public/question/81ced336-2644-47f3-ae2f-6bda42f2399d.json";
  const dataMAU = await getData(urlMAU);

  // get data for monthly bookings
  const urlBookings =
    "https://cal.metabaseapp.com/public/question/881369ab-c02b-4d48-b1a8-043bf88c45e8.json";
  const dataBookings = await getData(urlBookings);

  return (
    <main className="p-4 sm:p-10 space-y-10 max-w-7xl mx-auto">
      <Chart data={dataMAU} xAxisLabel="Month" yAxisLabel="Active users" />
      <Chart
        data={dataBookings}
        xAxisLabel="Month"
        yAxisLabel="Monthly bookings"
      />
    </main>
  );
}
