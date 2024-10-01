"use client";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Pricing from "@/components/pricing/Pricing";
import Link from "next/link";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-6 py-16 flex flex-col min-h-[calc(100vh-83px)]">
        <header className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold">Pricing</h1>
          <p className="text-lg leading-7 font-light">
            Use Linear for free with your whole team. Upgrade to enable
            <br />
            unlimited issues, enhanced security controls, and additional
            features.
          </p>
        </header>

        <ul className="flex divide-x">
          <Pricing>
            <Pricing.Header>
              <Pricing.Title>Free</Pricing.Title>
              <Pricing.Amount>$0</Pricing.Amount>
              <Pricing.Desc>Free for everyone</Pricing.Desc>
            </Pricing.Header>
            <Pricing.Content>
              <Pricing.List
                items={[
                  "All free plan features and…",
                  "5 teams",
                  "Unlimited issues and file uploads",
                  "Admin roles",
                ]}
              />
              <Pricing.Actions>
                <Pricing.Button>Get started</Pricing.Button>
              </Pricing.Actions>
            </Pricing.Content>
          </Pricing>
          <Pricing>
            <Pricing.Header>
              <Pricing.Title>Basic</Pricing.Title>
              <Pricing.Amount>
                ${isYearly ? "8" : "10"} per month
              </Pricing.Amount>
              <Pricing.Switch value={isYearly} onChange={setIsYearly} />
            </Pricing.Header>
            <Pricing.Content>
              <Pricing.List
                items={[
                  "All free plan features and…",
                  "5 teams",
                  "Unlimited issues and file uploads",
                  "Admin roles",
                ]}
              />
              <Pricing.Actions>
                <Pricing.Button>Get started</Pricing.Button>
              </Pricing.Actions>
            </Pricing.Content>
          </Pricing>
          <Pricing>
            <Pricing.Header>
              <Pricing.Title>Business</Pricing.Title>
              <Pricing.Amount>
                ${isYearly ? "12" : "14"} per month
              </Pricing.Amount>
              <Pricing.Switch value={isYearly} onChange={setIsYearly} />
            </Pricing.Header>
            <Pricing.Content>
              <Pricing.List
                items={[
                  "All basic plan features and...",
                  "Unlimited teams",
                  "Private teams and guest accounts",
                  "Zendesk and Intercom integrations",
                  "Triage responsibility",
                ]}
              />
              <Pricing.Actions>
                <Pricing.Button isFill>Get started</Pricing.Button>
                <span className="text-neutral-400">or</span>
                <Link
                  className="border-b"
                  href="mailto:dev.mehdineysi@gmail.com"
                >
                  contact sales
                </Link>
              </Pricing.Actions>
            </Pricing.Content>
          </Pricing>
          <Pricing>
            <Pricing.Header>
              <Pricing.Title>Enterprise</Pricing.Title>
              <Pricing.Amount>Custom pricing</Pricing.Amount>
              <Pricing.Desc>Annual billing only</Pricing.Desc>
            </Pricing.Header>
            <Pricing.Content>
              <Pricing.List
                items={[
                  "All business plan features and...",
                  "Issue SLAs",
                  "SAML and SCIM",
                  "Advanced security controls",
                  "Migration and onboarding support",
                ]}
              />
              <Pricing.Actions>
                <Pricing.Button>Request trial</Pricing.Button>
              </Pricing.Actions>
            </Pricing.Content>
          </Pricing>
        </ul>

        <footer className="mt-auto">
          <p className="text-xs text-center text-neutral-500">
            Made by Amir & Mety
          </p>
        </footer>
      </div>
    </div>
  );
}
