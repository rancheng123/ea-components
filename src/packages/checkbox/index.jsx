import './index.scss'
import { Checkbox } from "element-ui";

const name = 'EaCheckbox'
export default {
  name,
  render(h){
    return (
      <div class={name + "Wrap"}>

        <Checkbox
          attrs={{
            ...this.$attrs
          }}
          on={{
            ...this.$listeners
          }}
        >

          {this.$slots.default}
        </Checkbox>


      </div>
    )
  }
};

