import './App.css';
import { ConfigProvider } from 'antd';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { AuthProvider } from './providers/AuthContext';
import { AppContent } from './AppContent'
import { ThemeProvider } from '@/shared/lib/themeContext';

export const App: React.FC = () => {

    return <>
        <ThemeProvider>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </ThemeProvider>
    </>
};