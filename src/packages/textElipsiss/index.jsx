import './index.scss'

const name = 'EaTextElipsiss'
export default {
  name,
  render(h){


    return (
      <span class={name + "Wrap EaCommonWrap"}>

        {(()=>{
          let { value, showMax } = this.$attrs;

          if (!showMax) {
            showMax = 1000000000;
          };
          if (!value) return "";
          if (value.length > showMax) {
            return value.slice(0, showMax-1) + "...";
          }
          return value


        })()}



      </span>
    )
  }
};

