import { Routes, Route } from "react-router";
import HomeLayout from "./layout/homeLayout";
import Home from "./pages/Home";
import ActiveCalendarPage from "./pages/ActiveCalendar";

function App() {
  const menus = [
    {
      label: "JX3API",
      subMenus: [{ label: "活动日历", to: "/active-calendar" }],
    },
  ];

  return (
    <Routes>
      <Route element={<HomeLayout menus={menus} />}>
        <Route path="/" element={<Home />} />
        <Route path="/active-calendar" element={<ActiveCalendarPage />} />
      </Route>
    </Routes>
  );
}

export default App;
