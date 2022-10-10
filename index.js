const Mustache = require('mustache');
const CircularJSON = require('circular-json');
const fs = require('fs');

class commander2documentation{
		FILTER_KEYS = ["_name","_description","commands","options","_args","parent"]
		FILTER_ARG_KEYS= ["_name","description","defaultValue","default"]//"argChoices","default","defaultValueDescription"
	  FILTER_OPTIONS=["flags","description","required","defaultValue","long","short","required"]
		DEFAULT_TEMPLATE = fs.readFileSync(__dirname+"/templates/mixins.nav.js","utf8").toString()
		BLOCK_OPTIONS=["-V, --version"]

		constructor(commands){
			this.items=this.getFilterAndDeepScan(commands)
		}

		_save_mixin(bin){
			// const newMixin=this.render({
			// 	nav:CircularJSON.stringify(this.items),
			// 	bin
			// })
			const newMixin=CircularJSON.stringify({
				nav:this.items,
				bin
			})
			fs.writeFileSync(__dirname+"/app/mixins/data.json", newMixin,{overwrite:true})
		}

		build({bin,output}){
			this._save_mixin(bin)
			const execSync = require('child_process').execSync;

			const APP_PATH=__dirname+"/app"

			console.log('1/3: Check dependencies...')
			const checkNodeModules=fs.existsSync(APP_PATH+"/node_modules")
			if(!checkNodeModules){
				console.log('Installing dependencies(one time required)...')
				execSync(`cd ${APP_PATH};npm i`, { encoding: 'utf-8', stdio: 'inherit' })
				console.log('Installed dependencies!')
			}else{
				console.log('Dependencies already installed!')
			}

			console.log('2/3: Building & Generating...')
			execSync(`cd ${APP_PATH};npm run generate`, { encoding: 'utf-8', stdio: 'inherit' });

			console.log('3/3: Moving...')
			require('fs-extra').moveSync(__dirname+"/app/dist", output, { overwrite: true });
			
			console.log('Done!')
		}

		filter(fiter_keys){
				return (item) => {
					const newObj = {};
					fiter_keys.forEach(name =>{
						if(item.hasOwnProperty(name)){
							newObj[name] = 
								typeof item[name]==="boolean"
									? item[name].toString()
									: item[name]
						}
					});
					return Object.keys(newObj).length>0
						? newObj
						: null;
			}
		}

		block(options,block_options=this.BLOCK_OPTIONS){
			options=options.filter(option=>!block_options.includes(option.flags))
			return options
		}

		render(data,template=this.DEFAULT_TEMPLATE){
			const output = Mustache.render(template,data);
			return output
		}

		getFilterAndDeepScan(items,fiter_keys=this.FILTER_KEYS){
			const filterItems = this.getFilterItems(items,fiter_keys)
			const deepScan = this.deepScan(filterItems)
			return deepScan
		}

		getFilterItems(items,fiter_keys=this.FILTER_KEYS){
			return items
				.map(this.filter(fiter_keys))
				.filter(item=>item!=null)
		}

		deepScan(items){
			return items.map(item=>{
				item.options=this.getFilterItems(item.options,this.FILTER_OPTIONS)
				item.options=this.block(item.options)
				item._args=this.getFilterItems(item._args,this.FILTER_ARG_KEYS)
				if(item.commands){
						item.commands=this.getFilterAndDeepScan(item.commands)
						return item
				}
			})
		}
		
}

module.exports = commander2documentation