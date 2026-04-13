import './App.css';
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