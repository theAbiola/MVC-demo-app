export const getHome = (req, res) => {
    res.render("home.ejs", { title: "Home Page" });
}