import './index.scss'
import { Input } from "element-ui";
export default {
  name: "EaInput",
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

