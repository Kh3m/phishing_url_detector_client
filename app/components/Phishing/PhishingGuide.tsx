"use client";

import Link from "next/link";
import Wrapper from "../Wrapper";
import Image from "next/image";

import phisshingImg from "@/public/phishing.png";
import PhishingScanner from "./PhishingScanner";

export default function PhishingGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Wrapper>
        <section className=" mx-auto py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              PHISHING AWARENESS SIMPLE GUIDE FOR EVERYONE
            </h2>
            <p className="text-gray-700 mb-6">
              A friendly, hands-on guide to recognise phishing links and protect
              yourself online. Scan a URL, read the simple guide, and test your
              knowledge with a short quiz.
            </p>

            <div className="flex gap-3">
              <a
                href="#scanner"
                className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg font-medium shadow"
              >
                Scan a URL
              </a>
              <Link
                href="/quiz"
                className="inline-block px-5 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium"
              >
                Take Quiz
              </Link>
              <Link
                href="/guide"
                className="inline-block px-5 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium"
              >
                Complete Guide
              </Link>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-semibold">What is Phishing?</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Phishing tricks people into revealing passwords, payment
                  details, or installing harmful software by pretending to be
                  trusted services.
                </p>
              </li>

              <li className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-semibold">Common Signs</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Strange senders, misspellings, odd domains, urgent language,
                  and unrealistic offers.
                </p>
              </li>

              <li className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-semibold">Types of Attacks</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Email, SMS (smishing), social media, fake websites, and voice
                  calls (vishing).
                </p>
              </li>

              <li className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-semibold">Quick Safety Tips</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Use 2FA, check senders, avoid unknown links, and use official
                  apps and websites.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={phisshingImg}
              alt="Security illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <PhishingScanner />

        <section className=" py-12">
          <section className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold mb-3">Tips & Quick Actions</h4>
            <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2">
              <li>Enable 2FA on all important accounts</li>
              <li>Use a reputable password manager</li>
              <li>Verify links by hovering (on desktop)</li>
              <li>Report suspicious emails to your provider</li>
            </ul>

            <div className="mt-6">
              <Link
                href="/quiz"
                className="block px-4 py-3 bg-green-600 text-white rounded-lg text-center"
              >
                Take the Quiz
              </Link>
            </div>
          </section>
        </section>
      </Wrapper>
    </main>
  );
}
