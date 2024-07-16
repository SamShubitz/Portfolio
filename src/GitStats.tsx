import { getURLs, getStats } from "./api"
import { PieChart } from "react-minimal-pie-chart";
import { useQuery } from "@tanstack/react-query";

type GitStatsType = {
    [language: string]: number;
}

type Language = "TypeScript" | "JavaScript" | "CSS" | "C#" | "HTML"

const GitStats = () => {
    const urlQuery = useQuery({
        queryKey: ["urls"],
        queryFn: getURLs,
        staleTime: Infinity
    })

    const gitStatsQuery = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const urls = urlQuery.data.map((repo: any) => {
            return repo.languages_url
        });
    const responses = urls.map((url: string) => {
        return getStats(url)
    })
        return Promise.all(responses)
    },
        enabled: urlQuery.isSuccess,
        staleTime: Infinity
    })

    const calculateDisplayData = () => {
        const totals: GitStatsType = {};
        const gitStats: GitStatsType[] | undefined = gitStatsQuery.data

        gitStats?.forEach((repoStats) => {
            Object.entries(repoStats).forEach(([lang, stat]) => {
                if (lang in totals) {
                    totals[lang] += stat;
                } else {
                    totals[lang] = stat;
                }
            })
    })
        const pieData = [];
        const pieColors = {
            TypeScript: "#181c2e",
            JavaScript: "#363e63",
            "C#": "#7885bf",
            CSS: "#626280",
            HTML: "#e3a427",
        }
        for (let lang in totals) {
            const entry = {title: lang, value: totals[lang], color: pieColors[lang as Language]}
            pieData.push(entry)
        }
        return pieData
    }
    
    const displayData = calculateDisplayData();



    return (
        <div className="langs-used-section">
            <h1>Languages used</h1>
            <PieChart
            animate={true}
            style={{fontFamily: "Avenir", width: '300px', height: '300px', fontWeight: "bold", paddingInline: "1rem", paddingBlock: "1rem", borderBottomRightRadius: "6px", borderBottom: "5px solid rgb(61, 67, 84)", paddingBottom: "4rem"}}
            lineWidth={25}
            label={({ x, y, dx, dy, dataEntry }) => (
                <text
                    x={x}
                    y={y}
                    dx={dx}
                    dy={dy}
                    dominant-baseline="central"
                    text-anchor="middle"
                    style={{
                        fill: 'black', pointerEvents: 'none', fontSize: '4px'
                    }}>
                    <tspan x={x-2} y={y+1} dx={dx} dy={dy}>{dataEntry.title}</tspan>
                    <tspan x={x-2} y={y-5} dx={dx} dy={dy}>{`${Math.round(dataEntry.value/1000)}%`}</tspan>
                </text>
            )}
            data={displayData}
        />
        </div>
    )

}

export default GitStats;