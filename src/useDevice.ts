import { useEffect, useState } from "react";

export enum Device {
    Desktop = 'desktop',
    Mobile = 'mobile'
}

const useDevice = () => {

    const [device, setDevice] = useState<Device>(Device.Desktop);

    const determineDevice = () => {
        setDevice(window.innerWidth <= 768 ? Device.Mobile : Device.Desktop);
    }

    useEffect(() => {
        if (window) {
            determineDevice();

            window.addEventListener('resize', determineDevice);

            return () => {
                window.removeEventListener('resize', determineDevice)
            }
        }
    }, [window]);

    return device;
}

export default useDevice;