<template>
  <div class="home">
    <EaInput
      :value="value"
      @input="
      (val)=>{

        value = val;
      }
      "

      placeholder="nihao"
      width="100"
      clearable
    ></EaInput>
  </div>
</template>

<script>
import '../../lib/button/index.css';

// 单独引入
//import EaInput from '../../lib/button/index.js';

// 联合引入
import { EaInput } from '../../lib/ea/index.js';

export default {
  name: "Home",
  data(){
    return {
      value: '22222'
    }
  },
  components: {
    EaInput
  },
};
</script>
