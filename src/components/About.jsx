import React from "react";

const Card = (Props) => {
  return(
    <div>
      <div class="flex flex-row gap-[30px] items-center h-[5vh] md:bg-white bg-color-pale-red">
        <div class="h-full">
          <h1 class="rounded-full py-2 px-5 bg-color-red text-white">
           {Props.number}
          </h1>
        </div>
        <div class="h-full">
          <h1 class="text-xl font-bold text-color-dark-blue">
            {Props.head}
          </h1>
        </div>
      </div>
      <div class="md:pl-20">
        <p class="paragraph my-4">
          {Props.paragraph}
        </p>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section class="about py-10">
      <div class="container  flex flex-col md:flex-row">
        <div class="md:w-1/2 w-full text-center md:text-left">
          <h2 class="header2 w-full md:w-[400px]">
            What’s different about Manage?
          </h2>
          <p class="paragraph my-7 w-full md:w-[400px]">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div class="md:w-1/2 w-full flex flex-col gap-[30px] items-center">
          <Card
            head="Track company-wide progress"
            paragraph="See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture
            again."
            number="01"
          />
          <Card
            head="Advanced built-in reports"
            paragraph="Set internal delivery estimates and track progress toward
            company goals. Our customisable dashboard helps you build out
            the reports you need to keep key stakeholders informed."
            number="02"
          />
          <Card
            head="Everything you need in one place"
            paragraph="Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an
            all-in-one team productivity solution."
            number="03"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
