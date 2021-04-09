<script lang="jsx">
/* eslint-disable */
import { Input } from "element-ui";

export default {
  name: "EaInput",
  components: {
    Input,
  },
  render() {
    console.log(this.$props);
    console.log(this.$attrs);
    console.log(this);

    return (
      <div>
        <Input

          attrs={{
            ...this.$attrs
          }}
          on={{
            ...this.$listeners,
            //input: this.$listeners.input
          }}
        />
      </div>
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
