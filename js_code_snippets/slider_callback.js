
const data = source.data;
const plot_data = plot_source.data;

year_label.text = String(cb_obj.value);

plot_data["Country Name"]=[],
plot_data["Country Code"]=[],
plot_data["Continent"]=[],
plot_data["Year"]=[],
plot_data["Fertility"]=[],
plot_data["Life Expectancy"]=[],
plot_data["Population"],
plot_data["Circle Size"]=[],
plot_data["Circle Color"]=[]

for (let i=0; i < data["Year"].length; i++){
    if (data["Year"][i] == cb_obj.value) {
        plot_data["Country Name"].push(data["Country Name"][i]);
        plot_data["Country Code"].push(data["Country Code"][i]);
        plot_data["Continent"].push(data["Continent"][i]);
        plot_data["Year"].push(data["Year"][i]);
        plot_data["Fertility"].push(data["Fertility"][i]);
        plot_data["Life Expectancy"].push(data["Life Expectancy"][i]);
        plot_data["Population"].push(data["Population"][i]);
        plot_data["Circle Size"].push(data["Circle Size"][i]);
        plot_data["Circle Color"].push(data["Circle Color"][i]);
    }

}
plot_source.change.emit();