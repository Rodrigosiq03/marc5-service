interface PageSelectorProps {
    page: "Início" | "Cursos" | "Planos" | "Sair" | null;
}

export const PageSelector: React.FC<PageSelectorProps> = ({ page }) => {
    const style = { color: 'red' };

    switch (page) {
        case "Início":
            return <div style={style}>Início Page</div>;
        case "Cursos":
            return <div style={style}>Cursos Page</div>;
        case "Planos":
            return <div style={style}>Planos Page</div>;
        case "Sair":
            return <div style={style}>Sair Page</div>;
        default:
            return <div style={style}>Início Page</div>
    }
};