import Chart from "@/components/chart";
import { PitchCarusel } from "@/components/pitch/pitch-carousel";

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
export default async function Home() {
  // get data for monthly active users
  const dataMAU = await getData(
    "https://cal.metabaseapp.com/public/question/81ced336-2644-47f3-ae2f-6bda42f2399d.json"
  );
  // get data for monthly bookings
  const dataMonthlyBookings = await getData(
    "https://cal.metabaseapp.com/public/question/881369ab-c02b-4d48-b1a8-043bf88c45e8.json"
  );
  // get data for monthly bookings
  const dataMonthlyAttendees = await getData(
    "https://cal.metabaseapp.com/public/question/ce7ef176-5072-42de-954e-5d4aaa20418e.json"
  );

  return (
    <>
      <PitchCarusel
        mau={
          <Chart data={dataMAU} xAxisLabel="Month" yAxisLabel="Active users" />
        }
        bookings={
          <Chart
            data={dataMonthlyBookings}
            xAxisLabel="Month"
            yAxisLabel="Monthly bookings"
          />
        }
        totalUniqueGuests={
          <>
            <Chart
              data={dataMonthlyAttendees}
              xAxisLabel="Month"
              yAxisLabel="Distinct values of Email"
            />
          </>
        }
      />
    </>
  );
}
