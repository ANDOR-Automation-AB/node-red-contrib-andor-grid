import AndorGrid from "./src/andor-grid.vue";

export default {
    id: "andor-grid",
    name: "Andor Grid",
    description: "Custom grid widget for Dashboard 2",
    component: AndorGrid,
    props: {
        value: { type: [String, Number, Array, Object], default: "" }
    }
};
