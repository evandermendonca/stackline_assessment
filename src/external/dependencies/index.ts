import { Container } from 'inversify';
import bindAllDepdencies from './bindings';

const container = new Container({ autoBindInjectable: true });

bindAllDepdencies(container);

export default container;
