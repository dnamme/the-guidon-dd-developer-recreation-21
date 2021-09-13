import StaffCard from "./StaffCard";
import "./styles.css";

function Main() {
  const clusters = [
    {
      name: "Writing Cluster",
      staffs: [
        {
          name: "News",
          color: "#1C4480",
          text: "At the forefront of The GUIDON, News is committed to chronicle all the journalistically relevant events within the...",
        },
        {
          name: "Sports",
          color: "#1C4481",
          text: "Sports transcends the field of play in its ability to capture the essence of human tenacity in the face of immense...",
        },
        {
          name: "Inquiry",
          color: "#8F181B",
          text: "Inquiry is the analytical and investigative arm of The GUIDON, tasks with looking into the heart of current events and...",
        },
        {
          name: "Beyond Loyola",
          color: "#D4B835",
          text: "Through its reportage of diverse and underserved realities outside the University, Beyond loyola strives to assert its...",
        },
        {
          name: "Features",
          color: "#009C65",
          text: "Dedicated to telling stories of the human, Features delves into topics surrounding phenomena that shape the individual...",
        },
        {
          name: "Vantage Magazine",
          color: "#5E61BA",
          text: "We are The GUIDON's online magazine: A publication dedicated to campus culture and the people who make it. Vantage...",
        },
        {
          name: "Broadcast News",
          color: "#F09724",
          text: "Broadcast News aims to amplify voices through the use of audio-visual medium, capturing human-centric stories that...",
        },
      ],
    },
    {
      name: "Organizational Cluster",
      staffs: [
        {
          name: "Social Media",
          color: "#11294D",
          text: "The Social Media staff is the online consultative arm of The GUIDON. It is responsible for disseminating content on the...",
        },
        {
          name: "Human Resources",
          color: "#006944",
          text: "Serving as the internal affairs arm of The GUIDON, the Human Resources staff primarily caters to member welfare and...",
        },
        {
          name: "Externals",
          color: "#A18C28",
          text: "Standing as the face of The GUIDON, the Externals staff brings forward the publication's advocacies to difference sectors...",
        },
        {
          name: "Research",
          color: "#5C0F11",
          text: "We are The GUIDON's analytical arm, focused on crafting data-driven strategies and content that augment the publication's...",
        },
      ],
    },
    {
      name: "Design Cluster",
      staffs: [
        {
          name: "Graphic Design",
          color: "#6A91CD",
          text: "The Graphic Design staff aims to tell stories within and beyond the Ateneo through illustrations, layout design, and...",
        },
        {
          name: "Photos",
          color: "#E4BB4E",
          text: "The Photos staff is The GUIDON's premier photojournalistic arm of visual storytellers who aspire to shed light on...",
        },
        {
          name: "Video Production",
          color: "#DC676A",
          text: "The GUIDON's Video Production staff is at the forefront of the publication's shift to multimedia journalism. The staff...",
        },
        {
          name: "Digital Development",
          color: "#5EBC91",
          text: "The Digital Development staff provides an avenue to innovate Philippine campus journalism through the production of...",
        },
      ],
    },
  ];

  return (
    <main>
      {clusters.map((cluster) => (
        <div key={cluster.name}>
          <h1 className="cluster-name">{cluster.name}</h1>

          <div className="staffs-wrapper">
            {cluster.staffs.map((staff) => (
              <StaffCard key={`${cluster.name}_${staff.name}`} staff={staff} />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}

export default Main;
