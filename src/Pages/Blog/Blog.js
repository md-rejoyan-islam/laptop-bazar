import React from "react";

const Blog = () => {
  return (
    <section className="xl:w-[1150px] mx-auto  my-10">
      <div className="card mx-5 bg-white shadow-xl my-5">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <div className="divider m-0"></div>
          <p className="text-justify">
            <span className="font-bold">
              The Four Kinds of React State to Manage When we talk about state
              in our applications,
            </span>{" "}
            <br />
            it’s important to be clear about what types of state actually
            matter.
            <br />
            There are four main types of state you need to properly manage in
            your React apps:
            <ol>
              <> 1. Local state</> <br />
              <> 2. Global state</> <br />
              <> 3. Server state</> <br />
              <> 4. URL state</>
            </ol>{" "}
            <b>Let's cover each of these in detail: Local (UI) state – </b>{" "}
            <br />
            Local state is data we manage in one or another component. Local
            state is most often managed in React using the useState hook. For
            example, local state would be needed to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled and the values of a form’s
            inputs. <br />
            <b> Global (UI) state –</b>
            <br />
            Global state is data we manage across multiple components. Global
            state is necessary when we want to get and update data anywhere in
            our app, or in multiple components at least. A common example of
            global state is authenticated user state. If a user is logged into
            our app, it is necessary to get and change their data throughout our
            application. Sometimes state we think should be local might become
            global.
            <br />
            <b> Server state –</b>
            <br />
            Data that comes from an external server that must be integrated with
            our UI state. Server state is a simple concept, but can be hard to
            manage alongside all of our local and global UI state. There are
            several pieces of state that must be managed every time you fetch or
            update data from an external server, including loading and error
            state. Fortunately there are tools such as SWR and React Query that
            make managing server state much easier.
            <br />
            <b> URL state –</b> <br />
            Data that exists on our URLs, including the pathname and query
            parameters. URL state is often missing as a category of state, but
            it is an important one. In many cases, a lot of major parts of our
            application rely upon accessing URL state. Try to imagine building a
            blog without being able to fetch a post based off of its slug or id
            that is located in the URL! There are undoubtedly more pieces of
            state that we could identify, but these are the major categories
            worth focusing on for most applications you build.
          </p>
        </div>
      </div>
      <div className="card  bg-white shadow-xl my-5">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl">
            How does prototypical inheritance work?
          </h2>
          <div className="divider m-0"></div>
          <p className="text-justify">
            JavaScript is a prototype-based, Object Oriented programming
            language. After the ES6 updates, JavaScript allowed for “prototypal
            inheritance”, meaning that objects and methods can be shared,
            extended, and copied.
            <br />
            Sharing amid objects makes for easy inheritance of structure (data
            fields), behavior (functions / methods), and state (data values).
            <br />
            JavaScript is the most common of the prototype-capable languages,
            and its capabilities are relatively unique. When used appropriately,
            prototypical inheritance in JavaScript is a powerful tool that can
            save hours of coding.
            <br />
            Today, we want to get you acquainted with prototypal inheritance in
            JavaScript to get you up to date with the ES6 capabilities.
          </p>
        </div>
      </div>
    

      <div className="card  bg-white shadow-xl my-5">
        <div className="card-body my-5">
          <h2 className="card-title text-center text-2xl">
            What is a unit test? Why should we write unit tests?
          </h2>
          <div className="divider m-0"></div>
          <p className="text-justify">
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff. The main objective of unit
            testing is to isolate written code to test and determine if it works
            as intended.
            <br />
            A unit test typically comprises of three stages: plan, cases and
            scripting and the unit test itself. In the first step, the unit test
            is prepared and reviewed. The next step is for the test cases and
            scripts to be made, then the code is tested. Test-driven development
            requires that developers first write failing unit tests. Then they
            write code and refactor the application until the test passes. TDD
            typically results in an explicit and predictable code base.
            <br />
            Each test case is tested independently in an isolated environment,
            as to ensure a lack of dependencies in the code. The software
            developer should code criteria to verify each test case, and a
            testing framework can be used to report any failed tests. Developers
            should not make a test for every line of code, as this may take up
            too much time. Developers should then create tests focusing on code
            which could affect the behavior of the software being developed.
            <br />
            Unit testing involves only those characteristics that are vital to
            the performance of the unit under test. This encourages developers
            to modify the source code without immediate concerns about how such
            changes might affect the functioning of other units or the program
            as a whole. Once all of the units in a program have been found to be
            working in the most efficient and error-free manner possible, larger
            components of the program can be evaluated by means of integration
            testing. Unit tests should be performed frequently, and can be done
            manually or can be automated.
          </p>
        </div>
      </div>
      <div className="card  bg-white shadow-xl my-5">
        <div className="card-body ">
          <h2 className="card-title text-center text-2xl">
            React vs. Angular vs. Vue?
          </h2>
          <div className="divider m-0"></div>
          <p className="text-justify">
            Angular is a front-end framework with lots of components, services,
            and tools. On Angular’s site, you can see that they define Angular
            as: 
            <br />
            “The modern web developer’s platform”
            <br />
            It is developed and maintained by Google developers, but curiously
            it is not used to implement any of their most common products such
            as Search or YouTube.    
            <br />
            React is considered a UI library. They define themselves as:
            <br />
            “A JavaScript library for building user interfaces”
            <br />
            Facebook developers are behind the development and maintenance of
            this library. And, in this case, most of Facebook’s products are
            made with React.
            <br />
            Last but not least, Vue.js is, according to its site:
            <br />
            “A progressive JavaScript framework”
            <br />
            Vue.js is developed and led by Evan You, but also it counts on a
            huge open-source community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
