"use client";

import { fetchGithubStars } from "@/actions/fetch-github-stars";
import { fetchStats } from "@/actions/fetch-stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import customers from "./customers.png";
import { Card } from "./ui";

export function Section3({
  graph1,
  graph2,
}: {
  graph1: JSX.Element;
  graph2: JSX.Element;
}) {
  const [stars, setStars] = useState(null);
  const [users, setUsers] = useState(0);
  const [transactions, setTransactions] = useState(0);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetchGithubStars();
        setStars(response);
      } catch {}
    }

    async function fetchCount() {
      try {
        const { users, transactions } = await fetchStats();
        setUsers(users);
        setTransactions(transactions);
      } catch {}
    }

    fetchStars();
    fetchCount();
  }, []);

  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Trusted by the Industry</span>
        <span className="text-[#878787] hover:text-white">
          <Link target="_blank" className="font-display" href="https://cal.com">
            Cal.com
          </Link>
        </span>
      </div>
      <div className="pt-14 flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Monthly active users</h2>
              {graph1}
              {/* 
              <p className="text-[#878787] text-sm text-center">
                We have built Midday in public on X and amassed nearly 4000
                signups ready to start using Midday.
              </p>

              <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                3453
              </span> */}
            </Card>

            <Card className="min-h-[365px]">
              <h2 className="text-2xl">GitHub stars</h2>

              <p className="text-[#878787] text-sm text-center">
                Our goal is to build a great community around Midday.
              </p>

              <div className="flex items-center space-x-4">
                <span className="relative ml-auto flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                  {stars &&
                    Intl.NumberFormat("en", {
                      notation: "compact",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(stars.stargazers_count ?? 0)}
                </span>
              </div>
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Monthly Bookings</h2>

              {graph2}

              {/* <p className="text-[#878787] text-sm text-center">
                This is how many we’ve let into the system to start using it,
                joined the community and started to form Midday together with
                us.
              </p> */}

              {/* <div className="flex items-center space-x-4">
                <span className="relative ml-auto flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>

                <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                  {users}
                </span>
              </div> */}
            </Card>

            <Card className="min-h-[365px]">
              <h2 className="text-2xl">What people say</h2>
            </Card>

            {/* <Card className="min-h-[365px]">
              <h2 className="text-2xl">Transactions</h2>

              <p className="text-[#878787] text-sm text-center">
                We are already handling a significant amount of transaction
                data.
              </p>

              <div className="flex items-center space-x-4">
                <span className="relative ml-auto flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>

                <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                  {transactions &&
                    Intl.NumberFormat("en", { notation: "compact" }).format(
                      transactions
                    )}
                </span>
              </div>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}
