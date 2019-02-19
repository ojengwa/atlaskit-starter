import {
  atlascatPageContent,
  atlascatBacklogRoute
} from '../projects/atlascat';

const projectsConfig = {
  atlascat: {
    component: atlascatPageContent(),
    routeBase: atlascatBacklogRoute()
  }
};

export default projectsConfig;
