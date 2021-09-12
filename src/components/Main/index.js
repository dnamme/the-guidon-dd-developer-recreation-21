import StaffCard from "./StaffCard";
import "./styles.css";

function Main() {
  const clusters = [
    {
      name: "Writing Cluster",
      staffs: [
        {
          name: "News",
          color: "blue",
          text: "At the forefront of The GUIDON, News is committed to chronicle all the journalistically relevant events within the...",
        },
        {
          name: "Sports",
          color: "blue",
          text: "Sports transcends the field of play in its ability to capture the essence of human tenacity in the face of immense...",
        },
        {
          name: "Inquiry",
          color: "darkred",
          text: "Inquiry is the analytical and investigative arm of The GUIDON, tasks with looking into the heart of current events and...",
        },
      ],
    },
    {
      name: "Organizational Cluster",
      staffs: [
        {
          name: "Social Media",
          color: "blue",
          text: "The Social Media staff is the online consultative arm of The GUIDON. It is responsible for disseminating content on the...",
        },
      ],
    },
    {
      name: "Design Cluster",
      staffs: [
        {
          name: "Graphic Design",
          color: "lightblue",
          text: "The Graphic Design staff aims to tell stories within and beyond the Ateneo through illustrations, layout design, and...",
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
