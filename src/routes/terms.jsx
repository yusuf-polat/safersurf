import Head from "../components/head";

const Terms = function () {
    this.theme = localStorage.getItem("@nano/theme") || "mocha";
    this.cloakTitle = localStorage.getItem("@nano/cloak/title") || "";
    this.cloakIcon = localStorage.getItem("@nano/cloak/icon") || "";
    this.updated = new Date(1722322385209);

    return (
        <div class="container mx-auto p-14">
            <Head
                bind:theme={use(this.theme)}
                bind:cloakTitle={use(this.cloakTitle)}
                bind:cloakIcon={use(this.cloakIcon)}
            />
            <h1 class="text-Blue text-3xl font-bold mb-6">Hizmet Şartları</h1>
            <p class="text-sm mb-4">
                Yürürlük Tarihi:{" "}
                {this.updated.toLocaleDateString("tr-TR", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}
            </p>

            <section class="mb-6">
                <h2 class="text-2xl font-semibold mb-4">
                   
                </h2>
                <p>
                   
                </p>
            </section>
        </div>
    );
};

export default Terms;