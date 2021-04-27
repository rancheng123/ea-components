import './index.scss'
import { Input } from "element-ui";

import { version } from '../../../package.json';
console.log( `running version ${version}` );

export default {
  name: "EaInput2",
  components: {
    Input,
  },
  render(h){
    return (
      <div class="inputWrap">
          <Input
            attrs={{
              ...this.$attrs
            }}
            on={{
              ...this.$listeners
            }}
          />
      </div>
    )
  }
};

