export const getAbout = (req, res) => {
    res.render("about.ejs", { title: "About Us" });
}

export const getContact = (req, res) => {
    res.render("contact.ejs", { title: "Contact Us" })
}