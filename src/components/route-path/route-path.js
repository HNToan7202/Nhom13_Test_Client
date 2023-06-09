import React from "react";

import { Routes, Route } from "react-router-dom";

import ActionsManagement from "../new-action-labeling/actions-management/actions-management.jsx";
import ActionsLabeling from "../new-action-labeling/actions-labeling/actions-labeling.jsx";
import ModelManagement from "../model-management/model-management.jsx";
import ModelConfiguration from "../model-management/model-configuration/model-configuration.jsx";
import VideoManagement from "../video-analytics/videos-management/videos-management.jsx";
import Tournament from "../tournament/tournament.jsx";
import VideoInput from "../VideoInput/video-input.jsx";
import HighlightReview from "../highlight-review/index.jsx";
import Film from "../Film/index.jsx";
import HighlightFilter from "../HiglightFilter/highlight-filter.jsx";
import Gallery from "../Gallery/index.jsx";

function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Tournament />} />
      <Route path="/actions-labeling" element={<ActionsLabeling />} />
      <Route path="/model" element={<ModelManagement />} />
      <Route path="/model/configuration" element={<ModelConfiguration />} />
      <Route path="/video" element={<VideoManagement />} />
      <Route path="/tournament" element={<Tournament />} />
      <Route path="/film" element={<Film />} />
      <Route path="/video-edit" element={<VideoInput />} />
      <Route path="/highlight-review" element={<HighlightReview />} />
      <Route path="/highlight" element={<HighlightFilter />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default RoutePath;

// import React from "react";

// const RoutePath = () => (

// );

// export default RoutePath;
