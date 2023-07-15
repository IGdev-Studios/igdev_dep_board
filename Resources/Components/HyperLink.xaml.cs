namespace Igdev_dep_board.Resources.Components;

public partial class HyperLink : VerticalStackLayout
{
    public static readonly BindableProperty TextProperty = BindableProperty.Create(
        nameof(Text),
        typeof(string),
        typeof(HyperLink),
        "HyperLinkComponent Error"
    );
    public static readonly BindableProperty UrlProperty = BindableProperty.Create(
        nameof(Url),
        typeof(string),
        typeof(HyperLink),
        "https://example.com"
    );

    public string Text
    {
        get { return (string)GetValue(TextProperty); }
        set { SetValue(TextProperty, value); }
    }
    public string Url
    {
        get { return (string)GetValue(UrlProperty); }
        set { SetValue(UrlProperty, value); }
    }

    public HyperLink()
    {
        InitializeComponent();
        BindingContext = this;

        if (DeviceInfo.Current.Platform == DevicePlatform.Android)
        {
            Stack.TranslationY = -2;
        }
    }
}
