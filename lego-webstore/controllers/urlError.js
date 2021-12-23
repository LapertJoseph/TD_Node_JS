exports.raiseError = (req, res) => {
    
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
    }

}
  