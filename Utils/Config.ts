class Config {
    public WebPort = 8080;
    public mySQLhost = "localhost";
    public mySQLuser = "root";
    public mySQLpass = "12345678";
    public mySQLdatabase = "vac_project";
}

const config = new Config;

export default config;