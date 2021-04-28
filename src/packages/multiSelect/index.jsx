import './index.scss'
import EaCheckbox from "../checkbox/index.jsx";

const name = 'EaMultiSelect'
export default {
  name,

  render(h){
    window.selectThat = this;
    return (
      <div class={name + "Wrap EaCommonWrap"}>

        <EaCheckbox
          value={(()=>{

            let res = this.$attrs.opts.data.filter((ele,i)=>{
              return ele.checked === false
            });

            //为全选
            if(res && res.length){
              return false
            }
            // 全选
            else{
              return true
            }


          })()}
          onChange={(val)=>{
            this.$attrs.opts.data.forEach((ele,i)=>{
              ele.checked = val;
            })

            this.$attrs.opts.onChange && this.$attrs.opts.onChange(this.$attrs.opts.data)

          }}
        >
          {(()=>{
            if(this.$attrs.opts.renderLabel){
              return this.$attrs.opts.renderLabel(true);
            }
          })()}
        </EaCheckbox>

        {(()=>{
          return this.$attrs.opts.data.map((ele,i)=>{
            return (
              <EaCheckbox
                value={ele.checked}
                onChange={(val)=>{

                  ele.checked = val;

                  this.$attrs.opts.onChange && this.$attrs.opts.onChange(this.$attrs.opts.data)
                }}
              >
                {(()=>{
                  if(this.$attrs.opts.renderLabel){
                    return this.$attrs.opts.renderLabel(false,ele);
                  }
                })()}
              </EaCheckbox>
            )
          })
        })()}
      </div>
    )
  }
};

