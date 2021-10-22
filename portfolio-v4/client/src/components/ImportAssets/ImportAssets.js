const ImportAssets = r => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return 0;});
    return images;
};

export default ImportAssets;