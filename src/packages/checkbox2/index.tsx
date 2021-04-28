import './index.scss'
import { Checkbox } from "element-ui";


import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class EaCheckbox extends Vue {
  //name,
  render(){
    return (
      <div class={"EaCheckboxWrap"}>
        <Checkbox
           value={this.$attrs.value}

          // attrs={{
          //   ...this.$attrs
          // }}
          // on={{
          //   ...this.$listeners
          // }}

        >111122233334</Checkbox>


      </div>
    )
  }
}


