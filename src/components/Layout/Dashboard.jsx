// // thanh bar bên trái
// //props routes
// //dùng chung

import React, { useEffect } from 'react';
import "../../style/DashboardFooter.css";
import {
    HomeFilled,
    CompassOutlined,
    UserOutlined,
    GlobalOutlined,
    AppstoreAddOutlined,
    PlayCircleOutlined,
    HeartOutlined,
    PlusCircleOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons';


const Dashboard = () => {
    useEffect(() => {
        const toggleSidebar = () => {
            const dashboard = document.getElementById('dashboard');
            if (window.innerWidth < 440) {
                dashboard.classList.add('hide');
            } else {
                dashboard.classList.remove('hide');
            }
        };

        window.addEventListener('load', toggleSidebar);
        window.addEventListener('resize', toggleSidebar);

        return () => {
            window.removeEventListener('load', toggleSidebar);
            window.removeEventListener('resize', toggleSidebar);
        };
    }, []);

    return (
        <div className="dashboard">
            <div className="logo"><p>Melodies</p></div>

            <div className="DashBoard-menu">
                <p className="Menu">Menu</p>
                <div className="Menu-part">
                    <div className="dashboard-menu-item-hover">
                        <HomeFilled style={{ fontSize: '18px' }} />
                        <p><a>Home</a></p>
                    </div>
                    <div className="dashboard-menu-item-hover">
                        <GlobalOutlined style={{ fontSize: '18px' }} />
                        <p><a>Discover</a></p>
                    </div>
                    <div className="dashboard-menu-item-hover">
                        <CompassOutlined style={{ fontSize: '18px' }} />
                        <p><a>Albums</a></p>
                    </div>
                    <div className="dashboard-menu-item-hover">
                        <UserOutlined style={{ fontSize: '18px' }} />
                        <p><a>Artists</a></p>
                    </div>
                </div>
            </div>

            <div className="DashBoard-menu">
                <p className="Menu">Library</p>
                <div className="Menu-part">
                    <div className="dashboard-menu-item-hover">
                        <AppstoreAddOutlined style={{ fontSize: '18px' }} />
                        <p><a>Recently Added</a></p>
                    </div>
                    <div className="dashboard-menu-item-hover">
                        <PlayCircleOutlined style={{ fontSize: '18px' }} />
                        <p><a>Most played</a></p>
                    </div>
                </div>
            </div>

            <div className="DashBoard-menu">
                <p className="Menu">Playlist and favorite</p>
                <div className="Menu-part">
                    <div className="dashboard-menu-item-hover">
                        <HeartOutlined style={{ fontSize: '18px' }} />
                        <p><a>Your Favorites</a></p>
                    </div>
                    <div className="dashboard-menu-item-hover">
                        <PlayCircleOutlined style={{ fontSize: '18px' }} />
                        <p><a>Your Playlist</a></p>
                    </div>
                    <div className="dashboard-menu-item-hover">
                        <PlusCircleOutlined style={{ fontSize: '18px' }} />
                        <p><a>Add Playlist</a></p>
                    </div>
                </div>
            </div>

            <div className="DashBoard-menu">
                <p className="Menu">General</p>
                <div className="Menu-part">
                    <div className="dashboard-menu-item-hover">
                        <SettingOutlined style={{ fontSize: '18px' }} />
                        <p><a>Setting</a></p>
                    </div>
                    <div className="dashboard-menu-item-hover">
                        <LogoutOutlined style={{ fontSize: '18px' }} />
                        <p><a className="Logout">Log Out</a></p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;
