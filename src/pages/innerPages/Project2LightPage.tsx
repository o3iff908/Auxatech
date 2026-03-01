import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PortfolioV3 from "../../components/portfolio/PortfolioV3";
import ThemeLight from "../../components/switcher/ThemeLight";

const Project2LightPage = () => {
    return (
        <>
            <Helmet>
                <title>AUXA TECH - Our Projects</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Case Studies' breadCrumb='Our Projects' />
                <PortfolioV3 sectionClass='default-padding-bottom' />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default Project2LightPage;