import './index.scss'
import { Input } from "element-ui";
export default {
  name: "EaInput",
  components: {
    Input,
  },
  render(h){
    console.log(this.$attrs);
    console.log(this.$listeners);



    return (
      <div class="inputWrap">
        <span class="innerText">
          1



          <Input


            value={this.$attrs.value}

            onInput={this.$listeners.input}



            // attrs={{
            //   ...this.$attrs
            // }}
            // on={{
            //   ...this.$listeners,
            //   input(){
            //     debugger;
            //   }
            // }}
          />
        </span>

      </div>
    )
  }
};

