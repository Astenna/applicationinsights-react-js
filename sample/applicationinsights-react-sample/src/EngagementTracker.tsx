import React, { useEffect } from "react";
import { appInsights } from "./ApplicationInsightsService";

type EngagementTrackerProps = {
    readonly name: string;
    readonly children: React.ReactNode;
};

export function EngagementTracker({ name, children }: EngagementTrackerProps) {
    const displayedTimestamp = React.useRef<number | null>(null);
    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange);
        displayedTimestamp.current = Date.now();
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (displayedTimestamp.current !== null) {
                sendMetric("unrendered");

            }
        };
    }, []);
    const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible' && displayedTimestamp.current === null) {
            displayedTimestamp.current = Date.now();
        } else if (document.visibilityState === 'hidden') {
            sendMetric("hidden");
        }
    };
    const sendMetric = (displayFinishedCause: string) => {
        if (displayedTimestamp.current !== null) {
            const displayDuration = Date.now() - displayedTimestamp.current;
            displayedTimestamp.current = null;
            if (displayDuration > 0) {
                appInsights.trackMetric({
                    name: `${name} display duration (s)`,
                    average: displayDuration / 1000,
                    properties: { displayFinishedCause: displayFinishedCause }
                });
            }
        }
    }
    return <>{children}</>;
}