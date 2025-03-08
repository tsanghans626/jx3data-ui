import { Routes, Route } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import ActiveCalendarPage from "./pages/ActiveCalendar";
import ActiveListCalendarPage from "./pages/ActiveListCalendar";
import ActiveCelebsPage from "./pages/ActiveCelebs";
import ExamAnswerPage from "./pages/ExamAnswer";

function App() {
  const menus = [
    {
      label: "JX3API",
      subMenus: [
        { label: "活动日历", to: "/active-calendar" },
        { label: "活动月历", to: "/active-list-calendar" },
        { label: "行侠事件", to: "/active-celebs" },
        { label: "科举答题", to: "/exam-answer" },
      ],
    },
  ];

  return (
    <Routes>
      <Route element={<HomeLayout menus={menus} />}>
        <Route path="/" element={<Home />} />
        <Route path="/active-calendar" element={<ActiveCalendarPage />} />
        <Route
          path="/active-list-calendar"
          element={<ActiveListCalendarPage />}
        />
        <Route path="/active-celebs" element={<ActiveCelebsPage />} />
        <Route path="/exam-answer" element={<ExamAnswerPage />} />
      </Route>
    </Routes>
  );
}

export default App;
