import React from "react";

import RecentStories from "../components/RecentStories";
import urls from "../config/urls";
import cover from "../assets/cover.jpg";
import IconCard from "../components/IconCard";
import dove from "../assets/dove.svg";
import hand from "../assets/hand.svg";
import group from "../assets/group.svg";

export default function HomeScreen() {
  return (
    <>
      <header
        className="w-100"
        style={{
          background: `url(${cover})`,
          minHeight: "25rem",
          backgroundPosition: "center",
          backgroundPositionY: "65%",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "25rem", backgroundColor: "#3a39398c" }}
        >
          <div
            className="text-center text-white p-5 text-uppercase"
            style={{ backgroundColor: "#063540b0" }}
          >
            <h4>StoryTeller</h4>
            <p>Tell Your Story And Be Seen By The World</p>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="row pt-4 pb-2">
          <div className="col-12 col-md-4">
            <IconCard
              icon={dove}
              text="shocase your creativity"
              color="#007bff"
            />
          </div>
          <div className="col-12 col-md-4">
            <IconCard icon={hand} text="Write your story" color="#007bff" />
          </div>
          <div className="col-12 col-md-4">
            <IconCard icon={group} text="Build up community" color="#007bff" />
          </div>
        </div>
        <div className="row pt-4 pb-2">
          <div className="col-12 col-md-10">
            <h4 className="mb-0 text-muted text-uppercase">Recent Stories</h4>
          </div>
          <div className="col-12 col-md-2">
            <div className="d-flex justify-content-end">
              <a href={urls.stroies} style={{ textDecoration: "none" }}>
                View all
              </a>
            </div>
          </div>
        </div>
        <div className="row pb-4">
          <RecentStories />
        </div>
      </main>
      <footer className="bg-white py-4 px-2">
        <p className="text-center text-muted">
          Tell your story with StoryTeller &copy;{" "}
        </p>
      </footer>
    </>
  );
}
