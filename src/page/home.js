import React from "react";
import { Routes, Route } from "react-router-dom";
var Profile = {
  Menu() {
    return (
      <div
        className="menu"
        style={{
          position: "absolute",
          zIndex: 1000000000,
          backgroundColor: "black",
          height: 90,
          boxShadow: "0 0 10px 4px #E6E6E6",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          position: "fixed",
          width: "100%",
        }}
      >
        <img
          src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.15752-9/261315713_419991883130656_4772314596804961885_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=BCYoUAwpZysAX_DKlOj&tn=0Y6YO-N-a70aMVJ0&_nc_ht=scontent.fhan5-6.fna&oh=9f160c5566638671b4f19ce759e3bda4&oe=61CCBB35"
          style={{ width: 90 }}
        />
      </div>
    );
  },
  Anhbiavaanhdaidien() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <div
          id="khungg"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <img
            className="anh"
            src="https://pbs.twimg.com/media/DsmX6NAXQAApWES.jpg"
            style={{
              width: "90%",
              height: "100%",
              borderRadius: "20px",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://avatarfiles.alphacoders.com/122/122338.png"
            style={{
              width: 180,
              height: 180,
              position: "absolute",
              borderRadius: "100%",
              borderStyle: "solid",
              borderColor: "#2E2E2E",
            }}
          />
          <h1 style={{ position: "absolute", marginTop: 280 }}>Ray</h1>
        </div>
      </div>
    );
  },
  Dongke() {
    return (
      <div>
        <hr
          style={{
            width: "40%",
            backgroundColor: "black",
            borderColor: "white",
            height: "0px",
            animation: "am 8s",
            animationIterationCount: "infinite",
          }}
        />
        <br />
      </div>
    );
  },
  Toilaai() {
    return (
      <div
        className="khung1"
        style={{
          display: "flex",
          justifyContent: "center",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="khungto">
          <h1
            className="gt1"
            style={{ fontSize: 50, color: "#0404B4", textAlign: "center" }}
          >
            Who I am ?
          </h1>

          <h1 className="gt" style={{ width: "100%", textAlign: "center" }}>
            My name is Khoi, currently a high school student. In the future ,I
            plan to become a web developer. My hobbies are soccer, reading and
            playing games.
          </h1>
        </div>
        <br />
        <br />
        <br />
        <img
          className="anhh"
          style={{ width: "90%", borderRadius: "20px" }}
          src="https://i.pinimg.com/originals/51/f3/7c/51f37cc6774b3f4a62005f4ae70e67f8.jpg"
        />
      </div>
    );
  },
  Sothich() {
    return (
      <div
        className="khung1"
        style={{
          display: "flex",
          justifyContent: "center",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="khungto">
          <h1
            className="gt1"
            style={{ fontSize: 50, color: "#0404B4", textAlign: "center" }}
          >
            My hobby
          </h1>

          <h1 className="gt" style={{ width: "100%", textAlign: "center" }}>
            I started coding 6 months ago. I enjoy coding most of the time.
            During that time, I usually listen to music and enjoy a cup of
            coffee or tea. Also, I usually do some CSGO or OSU matches. I also
            like to play football, my favorite player is Neymar.
          </h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img
          className="anhh"
          style={{ width: "90%", borderRadius: "20px" }}
          src="https://i.pinimg.com/originals/e1/85/18/e18518c6d24257c6fb02e3c95a862d85.gif"
        />
      </div>
    );
  },

  Mangxahoi() {
    return (
      <div
        className="khung1"
        style={{
          display: "flex",
          justifyContent: "center",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="khungto">
          <h1
            className="gt1"
            style={{ fontSize: 50, color: "#0404B4", textAlign: "center" }}
          >
            Social network
          </h1>

          <h1 className="gt" style={{ width: "100%", textAlign: "center" }}>
            You can find me on the following platforms:
          </h1>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <a href="https://www.instagram.com/trongkhoilee/" target="_blank">
            <img
              className="mxh"
              src="https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ"
              style={{ width: 100, height: 100, borderRadius: "20px" }}
            />
          </a>

          <a href="https://www.facebook.com/trongkhoi.le.90/" target="_blank">
            <img
              className="mxh"
              src="https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg"
              style={{ width: 100, height: 100, borderRadius: "20px" }}
            />
          </a>
          <a href="https://github.com/trongkhoile" target="_blank">
            <img
              className="mxh"
              src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
              style={{ width: 100, height: 100, borderRadius: "20px" }}
            />
          </a>
        </div>
      </div>
    );
  },
};
function Home() {
  return (
    <React.Fragment>
      <Profile.Menu />
      <br />
      <br />
      <br />
      <Profile.Anhbiavaanhdaidien />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Profile.Dongke />
      <Profile.Toilaai />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Profile.Dongke />
      <Profile.Sothich />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Profile.Dongke />
      <Profile.Mangxahoi />
    </React.Fragment>
  );
}
export default Home;
