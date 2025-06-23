import { Chrono } from "react-chrono";

const items = [
  {
    date: "Dec 2021",
    title: "International Justice of Peace",
    subtitle: "Global peace advocate recognition",
    icon: stella1,
  },
  {
    date: "Oct 2022",
    title: "Member of the Order of Niger (MON)",
    subtitle: "National honour from Nigeria",
    icon: stella1,
  },
  {
    date: "Jul 2023",
    title: "Honorary Fellow, Royal Recognition",
    subtitle: "Award from King Charles III’s reps",
    icon: stella1,
  },
  {
    date: "Sep 2023",
    title: "CEO Golf Cup Winner",
    subtitle: "Zanzibar international golf champion",
    icon: stella1,
  },
];

export const TimelineSection: React.FC = () => (
  <section className="bg-[#0f0f13] text-white py-24">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-serif text-center mb-8">Milestone Journey</h2>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        slideShow
        slideItemDuration={5000}
        enableOutline
        cardHeight={220}
        theme={{
          primary: "#facc15",
          secondary: "#fff",
          cardBgColor: "#1a1a1f",
          cardForeColor: "#f0f0f0",
          titleColor: "#facc15",
        }}
        useReadMore={false}
        hideControls={false}
      >
        <div className="chrono-icons">
          {items.map((item) => (
            <img key={item.title} src={item.icon} alt="" className="w-8 h-8" />
          ))}
        </div>
      </Chrono>
    </div>
  </section>
);