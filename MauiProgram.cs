using Microsoft.Extensions.Logging;

namespace Igdev_dep_board;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
                fonts.AddFont("FiraSans-Black.ttf", "FiraSans-Black");
                fonts.AddFont("FiraSans-BlackItalic.ttf", "FiraSans-BlackItalic");
                fonts.AddFont("FiraSans-Bold.ttf", "FiraSans-Bold");
                fonts.AddFont("FiraSans-BoldItalic.ttf", "FiraSans-BoldItalic");
                fonts.AddFont("FiraSans-ExtraBold.ttf", "FiraSans-ExtraBold");
                fonts.AddFont("FiraSans-ExtraBoldItalic.ttf", "FiraSans-ExtraBoldItalic");
                fonts.AddFont("FiraSans-ExtraLight.ttf", "FiraSans-ExtraLight");
                fonts.AddFont("FiraSans-ExtraLightItalic.ttf", "FiraSans-ExtraLightItalic");
                fonts.AddFont("FiraSans-Italic.ttf", "FiraSans-Italic");
                fonts.AddFont("FiraSans-Light.ttf", "FiraSans-Light");
                fonts.AddFont("FiraSans-LightItalic.ttf", "FiraSans-LightItalic");
                fonts.AddFont("FiraSans-Medium.ttf", "FiraSans-Medium");
                fonts.AddFont("FiraSans-MediumItalic.ttf", "FiraSans-MediumItalic");
                fonts.AddFont("FiraSans-Regular.ttf", "FiraSans-Regular");
                fonts.AddFont("FiraSans-SemiBold.ttf", "FiraSans-SemiBold");
                fonts.AddFont("FiraSans-SemiBoldItalic.ttf", "FiraSans-SemiBoldItalic");
                fonts.AddFont("FiraSans-Thin.ttf", "FiraSans-Thin");
                fonts.AddFont("FiraSans-ThinItalic.ttf", "FiraSans-ThinItalic");
            });

#if DEBUG
        builder.Logging.AddDebug();
#endif

        return builder.Build();
    }
}
