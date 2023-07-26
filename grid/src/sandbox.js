import config from './index';

const comp = await config.component();
document.body.appendChild(comp);