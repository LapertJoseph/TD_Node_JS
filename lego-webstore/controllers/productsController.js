/* produit */
exports.products_list = (req, res) => {
    res.send("Liste des produits");
};

exports.products_infos = (req, res) => {
    const { id } = req.params;
    res.send(`Fiche Produit : ${id}`);
    console.log(id);
}
  