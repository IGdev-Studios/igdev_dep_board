using Microsoft.Maui.Controls;
using Microsoft.Maui.Controls.Shapes;

namespace Igdev_dep_board;

public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();

        if (DeviceInfo.Current.Idiom != DeviceIdiom.Phone)
        {
            Border1.WidthRequest = 600;
            Border2.WidthRequest = 600;
        }
    }

    private async void GotoTag(object sender, EventArgs e)
    {
        await Shell.Current.GoToAsync("//Tag");
    }
}
