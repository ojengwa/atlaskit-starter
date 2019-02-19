import {
  atlascatPageContent,
  atlascatBacklogRoute
} from '../projects/atlascat';

const projectsConfig = {
  atlascat: {
    id: 'atlascat/home',
    component: atlascatPageContent(),
    routeBase: atlascatBacklogRoute()
  }
};

export default projectsConfig;
